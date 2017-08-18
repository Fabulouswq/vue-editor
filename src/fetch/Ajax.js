import axios from 'axios'
import api from './api.js'
import ENV from './config.js'
/*
    constructor:_Ajax
*/
function _Ajax() {
    this.http = axios.create(ENV.config);
    this.getUrl = function(k) {
        var url, obj = api;
        if (k) {
            for (var key in obj) {
                if (key == k) {
                    url = ENV.config.baseUrl + obj[key].url;
                    return url
                }
            }
        } else {
            console.log('not found API_NAME')
            return false;
        }
    }
};
/*
    get
*/
_Ajax.prototype.get = function() {
    var API_NAME, url,
        _that = this,
        arg = arguments;
    API_NAME = arg.length == 0 ? null : arg[0];
    url = _that.getUrl(API_NAME);
    return new Promise((resolve, reject) => {
        _that.http.get(url)
            .then(res => {
                resolve({ data: res.data.list });
            })
            .catch((error) => {
                if (!url) {
                    reject('api url error');
                } else {
                    reject(error);
                }
            })
    })
};

/*
    post
*/
_Ajax.prototype.post = function(url, params) {
    const _that = this;
    return new Promise((resolve, reject) => {
        _that.http.post(_that.api.getList.url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
};
//     /*
//         jsonp
//     */
// _Ajax.prototype.jsonp = function(url) {
//     var callback = 'callback';
//     return new Promise((resolve, reject) => {
//         jsonp(url, {
//             params: reqData,
//             jsonpCallback: callback
//         }).then(res => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error);
//         })
//     })
// }
export default new _Ajax