import axios from 'axios';
import { expect } from 'chai';

// Base URL for axios
const baseURL = 'https://reqres.in';

// Test suite
describe('first api test suite', () => {
    // Test case which performs a GET request
    it('get request', async () => {
        try {
            // Using axios to call the GET request with the endpoint
            const response = await axios.get(`${baseURL}/api/users?page=2`);

            // Printing the response body
            console.log(response.data.data[0]);

            console.log(response.data.data[0]);
            //console.log(response.data);
            console.log("Response Code " + response.status);

            // Apply assertions to the status code
            expect(response.status).to.be.equal(200);
        } catch (error) {
            console.error(error);
            throw new Error('Request failed');
        }
    });
});
