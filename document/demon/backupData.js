/**
 *
 * 작성자 : 유종태
 * 작성일 : 2021.02.12
 * 내용 :
 *
 *
 * DB 백업 명령어 : mysqldump --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database -h baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u root -psimg1234 promi > ./backups2.sql
 * DB 백업 지우는 명령어 : sudo find /home/simg/baemin/backups/schema_bak/simg/simg_202102*.* -delete
 * /baemin/backups/schema_bak/simg$ sudo find /home/simg/baemin/backups/schema_bak/simg -mtime -3 : 3일전 데이터들
 *
 * sudo find /home/simg/baemin/backups/schema_bak/simg -mtime +3 -delete 3일 이상 전의 데이터는 삭제한다.
 *
 *
 *
 *  -- ㅂㅐ백업한것 복구
 * mysql -h baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u root -psimg1234 promi-dev <  promi_20210509.sql
 *
 *
 * -- 백업 : mysqldump --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database -h baemin-hyundai.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u simg -psimg1234 -P3210 hyundai > ./hyundai_20220629.sql
 * -- 백업 복구시키기 :  mysql -h baemin-hyundai.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u simg -psimg1234 hyundai_dev <  hyundai_20220629.sql
 *
 *
 */


var exec = require('child_process').exec, child;
const cron = require('node-cron');
const _util = require('./_util.js');
var Config = require('./_config.js');
var Con = new Config();
var baseDir = "/home/simg/document/demon/backups/schema_bak/";



// let promiCli = backupCli(Con.baeminPromi);
// console.log('프로미 데이터 백업 : ', promiCli);
//
//
// execCLI(promiCli);

// driver_insurance_dev
// let backCli = backupCli(Con.driver_insurance_dev);
// console.log(' 데이터 백업 : ', backCli);
// execCLI(backCli);

// let backCli = backupCli(Con.hyundai_baemin);
// console.log(' 데이터 백업 : ', backCli);
// execCLI(backCli);


// let backCli = backupCli(Con.driver_insurance);
// console.log(' 데이터 백업 : ', backCli);
// execCLI(backCli);



/**
 * 카카오 내비 운전자보험  백업데이터 처리
 * */
cron.schedule('50 50 08 * * *', () => {

    let bakCli = backupCli2(Con.driver_insurance);
    console.log('현카카오 내비 운전자보험  데이터 백업 : ', bakCli);


    execCLI(bakCli);

});
/**
 * 카카오 내비 운전자보험  13시 45분 50초에 백업한것 지울것
 * */
cron.schedule('50 45 13 * * *', () => {

    let promiCli = removeCommandLine(Con.driver_insurance, 3);
    console.log('현카카오 내비 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});



/**
 * 배민 현대 백업데이터 처리
 * */
cron.schedule('50 50 08 * * *', () => {

    let bakCli = backupCli2(Con.hyundai_baemin);
    console.log('현대 배민 데이터 백업 : ', bakCli);


    execCLI(bakCli);

});



/**
 * 배민 현대  13시 45분 50초에 백업한것 지울것
 * */
cron.schedule('50 45 13 * * *', () => {

    let promiCli = removeCommandLine(Con.hyundai_baemin, 3);
    console.log('현대 배민 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});




/**
 * 발렛 데이터 백업 아침 8ㄹ9시 45분 50초에 진행
 * */
cron.schedule('50 35 09 * * *', () => {

    let bakCli = backupCli2(Con.handler_prod);
    console.log('프로미 데이터 백업 : ', bakCli);


    execCLI(bakCli);

});


/**
 * 발렛 백업  13시 45분 50초에 백업한것 지울것
 * */
cron.schedule('50 45 13 * * *', () => {

    let promiCli = removeCommandLine(Con.handler_prod, 3);
    console.log('프로미 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});



/**
 * 대리 데이터 백업 아침 9시 45분 50초에 진행
 * */
cron.schedule('50 45 09 * * *', () => {

    let bakCli = backupCli2(Con.daeri_prod);
    console.log('프로미 데이터 백업 : ', bakCli);


    execCLI(bakCli);

});


/**
 * 대리 백업  13시 45분 50초에 백업한것 지울것
 * */
cron.schedule('50 45 13 * * *', () => {

    let promiCli = removeCommandLine(Con.daeri_prod, 3);
    console.log('프로미 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});



/**
 * PM 데이터 백업 아침 8시 45분 50초에 진행
 * */
cron.schedule('50 45 08 * * *', () => {
    let promiCli = backupCli(Con.pm_config);
    console.log('프로미 데이터 백업 : ', promiCli);


    execCLI(promiCli);

});


/**
 * PM 백업  12시 45분 50초에 백업한것 지울것
 * */
cron.schedule('50 45 12 * * *', () => {

    let promiCli = removeCommandLine(Con.pm_config, 3);
    console.log('프로미 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});






/**
 * 프로미 데이터 백업 아침 8시 30분 50초에 진행
 * */
cron.schedule('50 30 08 * * *', () => {
    let promiCli = backupCli(Con.baeminPromi);
    console.log('프로미 데이터 백업 : ', promiCli);


    execCLI(promiCli);

});




/**
 * 프로미데이터 백업  12시 40분 50초에 백업한것 지울것
 * */
cron.schedule('50 40 12 * * *', () => {

    let promiCli = removeCommandLine(Con.baeminPromi, 3);
    console.log('프로미 데이터 백업본 삭제 : ', promiCli);

    execCLI(promiCli);
});






/**
 * SIMG KR 백업하는데이터 아침 7시 30분 50초 진행
 * */
cron.schedule('50 30 07 * * *', () => {

    let simgkrCli = backupCli(Con.simgkr_config);
    console.log('simgkr 데이터 백업 : ', simgkrCli);

    execCLI(simgkrCli);
});




/**
 * SIMG KR 데이터 지운시간 12시 30분 50초에 백업한것 지울것
 * */
cron.schedule('50 30 12 * * *', () => {

    let simgkrCli = removeCommandLine(Con.simgkr_config, 3);
    console.log('simgkr 데이터 백업본 삭제 : ', simgkrCli);

    execCLI(simgkrCli);
});





/**
 * GeneralINSU 백업하는데이터 아침 7시 40분 50초 진행
 * */
cron.schedule('50 40 07 * * *', () => {

    let simgkrCli = backupCli(Con.general_simg);
    console.log('general insu 백업 : ', simgkrCli);

    execCLI(simgkrCli);
});



/**
 * GeneralINSU 데이터 지운시간 12시 31분 50초에 백업한것 지울것
 * */
cron.schedule('50 31 12 * * *', () => {

    let simgkrCli = removeCommandLine(Con.general_simg, 3);
    console.log('general insu 백업 삭제 : ', simgkrCli);

    execCLI(simgkrCli);
});









/**
 * LINKERBIZ 백업하는데이터 아침 6시 40분 50초 진행
 * */
cron.schedule('50 40 06 * * *', () => {

    let linkerbiz = backupCli(Con.linkerbiz);
    console.log('general insu 백업 : ', linkerbiz);

    execCLI(linkerbiz);
});


/**
 * LINKERBIZ 데이터 지운시간 12시 31분 50초에 백업한것 지울것
 * */
cron.schedule('50 31 11 * * *', () => {

    let linkerbiz = removeCommandLine(Con.linkerbiz, 3);
    console.log('general insu 백업 삭제 : ', linkerbiz);

    execCLI(linkerbiz);
});




/**
 * ev 백업하는데이터 아침 6시 40분 50초 진행
 * */
cron.schedule('50 50 06 * * *', () => {

    let ev = backupCli(Con.ev);
    console.log('general insu 백업 : ', ev);

    execCLI(ev);
});



/**
 * ev 데이터 지운시간 12시 31분 50초에 백업한것 지울것
 * */
cron.schedule('50 51 11 * * *', () => {

    let ev = removeCommandLine(Con.ev, 3);
    console.log('general insu 백업 삭제 : ', ev);

    execCLI(ev);
});




//  백업하는 로직
function backupCli(schema){

    var BUSINESSDAY = _util.getTime(0);
    let fileName = schema.database + '_' + BUSINESSDAY + '.sql';
    let fullPath = baseDir + schema.database + '/'+ fileName;
    // let returnValue = `tar -zcf /home/simg/baemin/logs/backups/log${directory}_${time}.tar.gz /home/simg/baemin/logs/${directory}/${time}*.*`;
    let returnValue = `mysqldump --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database -h ${schema.host} -u ${schema.user} -p${schema.password} -P${schema.port} ${schema.database} > ${fullPath}`;
    // let returnValue = `mysqldump --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database -h baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u root -psimg1234 promi > ./backups2.sql`;

    return returnValue
}



//  백업하는 로직 : mysql 5.7 부터 처리방식 변경
/**
 * 1. 세팅
 * mysql_config_editor set --login-path=backuphandlerDev --host=hana-production.c73he84duiho.ap-northeast-2.rds.amazonaws.com --user=simg --password
 *
 * 2. 확인
 * mysql_config_editor print --all
 *
 * 3. 백업
 * mysqldump --login-path=backuphandlerDev --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database handlerDev > /home/simg/handler-prod/backups/schema_bak/handlerDev/handlerDev_20210707.sql
 * **/
function backupCli2(schema){

    var BUSINESSDAY = _util.getTime(0);
    let fileName = schema.database + '_' + BUSINESSDAY + '.sql';
    let fullPath = baseDir + schema.database + '/'+ fileName;
    // let returnValue = `tar -zcf /home/simg/baemin/logs/backups/log${directory}_${time}.tar.gz /home/simg/baemin/logs/${directory}/${time}*.*`;
    let returnValue = `mysqldump --login-path=backup${schema.database} --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database ${schema.database} > ${fullPath}`;
    // let returnValue = `mysqldump --set-gtid-purged=OFF  --routines --triggers --events --add-drop-database -h baemin-prod.c73he84duiho.ap-northeast-2.rds.amazonaws.com -u root -psimg1234 promi > ./backups2.sql`;

    return returnValue
}



// 기존 백업 지우는 로직₩
function removeCommandLine(schema , time){

    let fullPath = baseDir + schema.database;
    let returnValue = `sudo find  ${fullPath} -mtime +${time} -delete`;
    //sudo find /home/simg/baemin/backups/schema_bak/simg -mtime +3 -delete 3일 이상 전의 데이터는 삭제한다.
    return returnValue
}

// 커맨드라인 실행하는 로직
function execCLI(command){

    exec(command, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });


}