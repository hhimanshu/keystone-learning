import {config, list} from "@keystone-6/core";
import {text} from "@keystone-6/core/fields";

export default config({
    db: {
        provider: "sqlite",
        url: "file:./keystone.db",
    },
    lists: {
        User: list({
            fields: {
                name: text({validation: {isRequired: true}}),
                email: text({validation: {isRequired: true}, isIndexed: "unique"})
            }
        })
    }
});