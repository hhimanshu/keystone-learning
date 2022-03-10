import {list} from "@keystone-6/core";
import {password, relationship, select, text, timestamp} from "@keystone-6/core/fields";

export const lists = {
    User: list({
        fields: {
            name: text({validation: {isRequired: true}}),
            email: text({validation: {isRequired: true}, isIndexed: "unique"}),
            posts: relationship({
                ref: 'Post.author', many: true
            }),
            password: password({validation: {isRequired: true}}),
        },
    }),
    Post: list({
        fields: {
            title: text(),
            author: relationship({
                ref: 'User.posts',
                ui: {
                    displayMode: "cards",
                    cardFields: ["name", "email"],
                    inlineEdit: {fields: ["name", "email"]},
                    linkToItem: true,
                    inlineCreate: {fields: ["name", "email", "password"]}
                }
            }),
            publishedAt: timestamp(),
            status: select({
                options: [
                    {label: 'Published', value: 'published'},
                    {label: 'Draft', value: 'draft'},
                ],
                defaultValue: 'draft',
                ui: {displayMode: "segmented-control"}
            })
        }
    })
};