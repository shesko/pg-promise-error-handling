'use strict';

var sql = require('../sql').users;

module.exports = rep => {

    /*
     This repository mixes hard-coded and dynamic SQL,
     primarily to show a diverse example of using both.
     */

    return {
        // Adds a new user, and returns the new id;
        // Typo added: sql.adds should have sql.add
        add: name =>
            rep.one(sql.adds, name, user => user.id),

    };
};
