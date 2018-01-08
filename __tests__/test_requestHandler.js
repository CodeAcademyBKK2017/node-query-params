const reqHand = require('../requestHandler');

//--------------------------------------------------

test('Login Success', function() {
    const request = {
        url: '/login'
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.TOKEN);
    expect(response.end).toHaveBeenCalled();
});

test('Name Success', function() {
    const request = {
        url: `/name?token=${reqHand.TOKEN}`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.USER_NAME);
    expect(response.end).toHaveBeenCalled();
});

test('Date of Birth Success', function() {
    const request = {
        url: `/dob?token=${reqHand.TOKEN}`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.USER_DOB);
    expect(response.end).toHaveBeenCalled();
});

test('Phone Success', function() {
    const request = {
        url: `/phone?token=${reqHand.TOKEN}`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.USER_PHONE);
    expect(response.end).toHaveBeenCalled();
});

test('Logout Success', function() {
    const request = {
        url: `/logout?token=${reqHand.TOKEN}`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.LOGOUT_SUCCESS);
    expect(response.end).toHaveBeenCalled();
});

//--------------------------------------------------

test('Page Not Found', function() {
    const request = {
        url: '/qwertyuiop'
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.PAGE_NOT_FOUND);
    expect(response.end).toHaveBeenCalled();
});

test('Name Failure', function() {
    const request = {
        url: `/name`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.WRONG_TOKEN);
    expect(response.end).toHaveBeenCalled();
});

test('Date of Birth Failure', function() {
    const request = {
        url: `/dob`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.WRONG_TOKEN);
    expect(response.end).toHaveBeenCalled();
});

test('Phone Failure', function() {
    const request = {
        url: `/phone`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.WRONG_TOKEN);
    expect(response.end).toHaveBeenCalled();
});

test('Logout Failure', function() {
    const request = {
        url: `/logout`
    };
    const response = {
        write: jest.fn(),
        end: jest.fn()
    }
    reqHand.requestHandler(request, response);

    expect(response.write).toHaveBeenCalledWith(reqHand.WRONG_TOKEN);
    expect(response.end).toHaveBeenCalled();
});
