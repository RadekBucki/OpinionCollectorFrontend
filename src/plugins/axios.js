"use strict";

import axios from "axios";

let config = {
    baseURL: process.env.BACKEND_URL || ""
};

export default {
    install: (app) => {
        app.config.globalProperties.$axios = axios.create({
            baseURL: config.baseUrl,
            headers: {
                Authorization: config.token ? `Bearer ${config.token}` : '',
            }
        })
    }
}
