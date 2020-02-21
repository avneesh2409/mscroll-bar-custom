import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import SettingsVisibleSwitch from '../modules/settings/settings-visible-switch';

export default class TodoWidget extends Widget {
    constructor(manager) {
        super("Todo", manager, 'div');
		this.tourStepData = {
			target: 'todo',
			placement: 'top',
			title: 'Todo List',
			content: 'Create your checklist and never miss any of your tasks.',
			xOffset: -10,
			onShow: () =>  $('.left-bottom-widgets').css('zIndex', 999999),
			onNext: () =>  $('.left-bottom-widgets').css('zIndex', '')
		}
    }

    init() {
        this.listData = "todoList";
		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/todo-btn.png');
        this.initSetting(SettingsKeys.Visible, true, new SettingsVisibleSwitch());
        this.initSetting(this.listData, []);
    }

    fillTasks() {
        let tasks = $('#todo-list-items');
        tasks.html("");
        const savedTasks = this.getSettings(this.listData);
        if (savedTasks) {
            $.each(savedTasks, (index,item) => {
                const marked = !item.status ? "todo-list-item-marked" : "";
                const icon = `<i class="material-icons">close</i>`;
                let task = $(`<li class='${marked}'>${item.value}${icon}</li>`);
                task.click((e) => {
                    let elem = $(e.target);
                    elem.toggleClass("todo-list-item-marked");
                    item.status = !item.status;
                    this.updateTask(item, index);
                });

                task.find('i').click((e) => {
                    e.stopPropagation();
                    this.deleteTask(task, index);
                });

                task.hover(
                    () => task.find('i').show(),
                    () => task.find('i').hide()
                );

                if (item.status) {
                    tasks.prepend(task);
                }
                else {
                    tasks.append(task);
                }
            });
        }
    }

    addTask(task) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) savedTasks = [];
        savedTasks.push(task);
        this.setSettings(this.listData, savedTasks);
        this.fillTasks();
    }

    updateTask(task, index) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) return;
        savedTasks[index] = task;
        this.setSettings(this.listData, savedTasks);
    }

    deleteTask(task,index) {
        let savedTasks = this.getSettings(this.listData);
        if (savedTasks === undefined) return;
        savedTasks.splice(index, 1);
        this.setSettings(this.listData, savedTasks);
        this.fillTasks();
    }

    render() {
        const _this = this;
        this.widgetElement.id = "todo";
        const $leftBottomWidgets = $('.left-bottom-widgets');

        const widgetHtml = `<div class='todo-list-container'>
                                <h3>ToDo list</h3>
                                <ul id='todo-list-items' class='widget-scroll'></ul>
                                <div class="float-field">
                                    <input type="text" id="todo-input" autocomplete="off"/>
                                    <label for="todo-input" class="todo-input-label">New task ></label>
                                    <a href='#' class="todo-add">Add</a>
                                </div>
                            </div>`;

        this.widgetElement.className = "widget";

        $leftBottomWidgets.append(this.widgetElement);
        $leftBottomWidgets.append($(widgetHtml));

        let todoList = $('.todo-list-container');

        function addNewTask() {
            const $task = $("#todo-input");
            if ($task.val().length < 2) return false;

            _this.addTask({ value: $task.val(), status: true });
            $task.val("");
        }

        $("#todo-input").on('keypress', (e) => {
            if (e.which == 13)  {
                e.preventDefault();
                addNewTask();
            }            
        });

        $(".todo-add").on('click', addNewTask);

        $(document).click((e) => {
          if($(e.target).closest('.todo-list-container').length === 0) {
            $('.todo-list-container').removeClass('todo-list-open')
          }
        });

        $("#todo").on('click', (e) => {
            if (!$(e.target).hasClass("widget")) return false;

            e.stopPropagation();

            if (todoList.hasClass('todo-list-open')) {
                todoList.removeClass('todo-list-open');
            } else {
                todoList.toggleClass('todo-list-open');
            }
        });

        console.log("TodoWidget::render()");
    }

    start() {
        this.fillTasks();
        console.log("TodoWidget::start()");
    }
}
