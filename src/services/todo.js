import api from "./api";

export default {
    getItemOpenList () {

        return new Promise((resolve, reject) => {
            api.post(
                "item/list",
                {"status":"open"}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    getItemCompleteList () {

        return new Promise((resolve, reject) => {
            api.post(
                "item/list",
                {"status":"completed"}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    markItem (uuid, status) {

        return new Promise((resolve, reject) => {
            api.put(
                "item/mark/"+uuid,
                {"mark":status}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    addItem (name) {

        return new Promise((resolve, reject) => {
            api.post(
                "item/create",
                {"name":name}
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    deleteItem (uuid) {

        return new Promise((resolve, reject) => {
            api.delete(
                "item/delete/" + uuid
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    }
}