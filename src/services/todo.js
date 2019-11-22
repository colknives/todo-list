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
                {"status":"complete"}
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