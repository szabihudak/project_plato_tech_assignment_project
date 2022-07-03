# Test Design based on  OpenAPI specification for employee management service

##Test cases
###Test Case 1
####Test Step 1
 - Request: POST /employee
 - Description: Happy flow - Successful employee creation with valid input parameters in the request body
 - Test data:
   - Request: {
     "name": "Test User",
     "salary": 2500,
     "department": "IT"
     }
   
 - Expected Result:
   - Status Code: 201
   - Response: {
     "employeeId": generated_employee_id
     }
   
####Test Step 2
 - Request: GET /employee/generated_employee_id
 - Description: Happy flow - Call this endpoint with the previously generated employeeID - generated_employee_id
 - Test data:
    employeeID = generated_employee_id

 - Expected Result:
    - Status Code: 201
    - Response: {
      "fullName": "Test User",
      "salary": 2500,
      "department": "IT"
      }

###Test Case 2
 - Request: GET /employee/invalid_employee_id
 - Description: Error handling - Call this endpoint with an employeeID which doesn't exist is the system
 - Test data:
   employeeID = invalid_employee_id
 - Expected Result:
     - Status Code: Related error code
     - Response: {"Related error message"
       }

###Test Case 3
- Request: GET /employee/
- Description: Error handling - Call this endpoint without employeeID
- Test data:
  employeeID =
- Expected Result:
    - Status Code: Related error code
    - Response: {"Related error message"
      }

###Test Case 4
- Request: POST /employee
- Description: Error handling - In the request body one (or more) of the fields doesn't have value. In this example this is the "name" field
- Test data:
    - Request: {
      "name": ,
      "salary": 2500,
      "department": "IT"
      }
  - Expected Result:
      - Status Code: Related error code
      - Response: {"Related error message"
        }

###Test Case 5
- Request: POST /employee
- Description: Error handling - In the request body one (or more) filed has inappropriate value. 
   - "name" <2 or >128 or/and
   - "salary" <900 or >9000 or/and
   - "department" >32
  - in this example length of the "name" is 1
- Test data:
    - Request: {
      "name": "A",
      "salary": 2500,
      "department": "IT"
      }
- Expected Result:
    - Status Code: Related error code
    - Response: {"Related error message"
      }



 