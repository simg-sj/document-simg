
function _config() {

    var return_val = {
        "baemin" : {
            host     : '52.78.79.9', // 52.78.79.9 쪽으로 위치이동
            port     : 3306,
            user     : 'root',
            password : 'simg123!',
            database : 'baemin',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "pm_config" : {
            host     : 'baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'root',
            password : 'simg1234',
            database : 'baemin-prod',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "baeminPromi" : {
            host     : 'baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com', // 52.78.79.9 쪽으로 위치이동
            port     : 3306,
            user     : 'root',
            password : 'simg1234',
            database : 'promi',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "baeminPromiDev" : {
            host     : 'baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com', // 52.78.79.9 쪽으로 위치이동
            port     : 3306,
            user     : 'root',
            password : 'simg1234',
            database : 'promi-dev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "msg_config" : {
            host     : 'baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'root',
            password : 'simg1234',
            database : 'msgSchema',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "linker" : {
            host     : '15.164.35.89',
            port     : 3306,
            user     : 'root',
            password : 'jt695032',
            database : 'promi',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "simgkr_config" : {
            host     : '15.164.196.139',
            port     : 3306,
            user     : 'simg',
            password : 'koreapark0327',
            database : 'simg',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "general_simg" : {
            host     : '15.164.196.139',
            port     : 3306,
            user     : 'simg',
            password : 'koreapark0327',
            database : 'GeneralInsurance',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "linkerbiz" : {
            host     : '13.209.156.86',
            port     : 3306,
            user     : 'root',
            password : 'jt695032',
            database : 'linkerbiz',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "ev" : {
            host     : '13.209.156.86',
            port     : 3306,
            user     : 'root',
            password : 'jt695032',
            database : 'ev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "handler_dev" : {
            host     : 'hana-hand-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'simg',
            password : 'simg4*7^3',
            database : 'handlerDev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "handler_prod" : {
            host     : 'hana-production.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'simg',
            password : 'simg$7^#',
            database : 'handlerDev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "daeri_dev" : {
            host     : 'hana-hand-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'simg',
            password : 'simg4*7^3',
            database : 'daeriDev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "daeri_prod" : {
            host     : 'hana-production.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'simg',
            password : 'simg$7^#',
            database : 'daeriDev',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "driver_insurance" : {
            host     : 'driver-insurance-production.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3306,
            user     : 'simg',
            password : 'simg12345',
            database : 'driver_insurance',
            options: {
                connectTimeout  : 1000 * 480,
                requestTimeout  : 1000 * 480
            },
            multipleStatements: true
        },
        "hyundai_baemin" : {
            connectionLimit : 1000,
            host     : 'baemin-hyundai.c73he84duiho.ap-northeast-2.rds.amazonaws.com',
            port     : 3210,
            user     : 'simg',
            password : 'simg1234',
            database : 'hyundai',
            options: {
                connectTimeout  : 1000 * 480000,
                requestTimeout  : 1000 * 480000
            },
            multipleStatements: true
        },

    }

    return return_val;
}

module.exports = _config;
