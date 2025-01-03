import axios from 'axios';

class ApiService {
    constructor(baseURL) {
        this.apiClient = axios.create({
            baseURL: baseURL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    // 設計一個通用的 GET 方法
    async get(endpoint, params = {}) {
        try {
            const response = await this.apiClient.get(endpoint, { params });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // 設計一個通用的 POST 方法
    async post(endpoint, data = {}) {
        try {
            const response = await this.apiClient.post(endpoint, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // 通用的錯誤處理
    handleError(error) {
        // 如果需要，這裡可以返回自定義的錯誤信息
        throw error;
    }
}
export default ApiService;
