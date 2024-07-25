import request from 'supertest';
import { expect, it, describe } from '@jest/globals';
import { jest } from '@jest/globals';

import { fetchDataGov, addGaragesToDB, getGaragesFromDB } from '../../app/controllers/garages.controller'; // Import your actual functions here
import * as dataModule from '../../app/controllers/garages.controller'; // Import the module containing the functions
import jestConfig from '../../jest.config';

import  app  from '../../server'; // Import your Express app

// jest.mock(dataModule, () => ({
//     ...jest.requireActual('../../dataModule'),
//     fetchDataGov: jest.fn().mockResolvedValue(mockData),
//     addGaragesToDB: jest.fn().mockResolvedValue(mockResponse),
//     getGaragesFromDB: jest.fn().mockResolvedValue(mockData),
//   }));

jest.mock('../../app/controllers/garages.controller', () => {
    return {
        fetchDataGov: jest.fn((arr) => {
          
            // if (obj.SupplierCode == 1000)
            //     return { status: 200, data: { SupplierCode: 1000, SupplierName: "Racel" } };
            // else
                // return { status: 500, data: "there is not such branches for this supplier" }

            
return { status: 500, data: "there is not such branches for this supplier" }

        }),
        insertPump: jest.fn((obj) => {
            // if (obj.name == "error")
            //     throw new Error('wow')
            // else
                return true
        }),
        

    }
})

describe('Garages Routes', () => {
  it('should fetch data from Gov API', async () => {
    const res = await request(app).get('/api/garages/fetchDataGov');
    const  fetchDataGov =  jest.requireMock('../../app/controllers/garages.controller');
    expect(res).toBeDefined();
    expect(res.serverError).toBeFalsy();
    expect(res.notFound).toBeFalsy();
    expect(res.statusCode).toBe(200);
    expect(res.status).toBe(200);
  });

  it('should add garages to the database', async () => {
    const res = await request(app).put('/api/garages/addGarages').send({});
    const  addGaragesFromDB =  jest.requireMock('../../app/controllers/garages.controller');
    expect(addGaragesFromDB).toHaveBeenCalled();
    // expect(res).toBeDefined();
    // expect(res.serverError).toBeFalsy();
    // expect(res.notFound).toBeFalsy();
    // expect(res.statusCode).toBe(200);
    // expect(res.status).toBe(200);
  });


//   it('should get garages from the database', async () => {
//     const mockData = { /* Mock your data here */ };
//     // getGaragesFromDB = jest.fn().mockResolvedValue(mockData);

//     const res = await request(app).get('/api/garages/getGarages');

//     expect(res.status).toBe(200);
//     expect(res.body).toEqual(mockData);
//   });
});