import {config} from "@keystone-6/core";
import {lists} from "./schema";


export default config({
    db: {
        provider: "sqlite",
        url: "file:./keystone.db",
    },
    lists
});