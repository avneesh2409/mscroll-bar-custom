export default class SearchUtils {
    static buildSearchUrl(schema, domain, params, values) {
        let url = `${schema}://${domain}/?${params}`;
        for (let key in values) {
            url = url.replace(`{${key}}`, encodeURIComponent(values[key] || ""));
        }
        return url;
    }
}
