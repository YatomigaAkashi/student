const student = require('../model/student');
const classModel = require('../model/class');

module.exports = {
    // 获得全部学生信息
    getStudents: async ctx => {
        let list = await student.getStudents();
        if (!list) {
            ctx.body = {
                code: '002',
                msg: '获取数据失败'
            };
            return;
        }
        ctx.body = {
            code: '001',
            msg: list
        }
    },
    // 添加学生
    add: async ctx => {
        let data = ctx.request.body;

        let dname = await classModel.getDnameByClno(data.Clno);
        if (!dname) {
            ctx.body = {
                code: '002',
                msg: '添加失败'
            }
        }
        dname = dname[0].Dname;
        data.Dname = dname;

        let result = await student.add(data);
        if(!result) {
            ctx.body = {
                code: '002',
                msg: '添加失败'
            };
            return;
        }
        if (result.affectedRows === 1) {
            ctx.body = {
                code: '001',
                msg: '添加成功'
            }
        }
    },

    // 删除学生
    delBySno: async ctx => {
        let Sno = ctx.request.query.Sno;
        let result = await student.delBySno(Sno);
        if(!result) {
            ctx.body = {
                code: '002',
                msg: '删除失败'
            };
            return;
        }
        if (result.affectedRows === 1) {
            ctx.body = {
                code: '001',
                msg: '删除成功'
            }
        }
    },

    // 更新学生信息
    put: async ctx => {
        let data = ctx.request.body;

        let dname = await classModel.getDnameByClno(data.Clno);
        if (!dname) {
            ctx.body = {
                code: '002',
                msg: '添加失败'
            }
        }
        dname = dname[0].Dname;
        data.Dname = dname;

        let result = await student.update(data);
        if(!result) {
            ctx.body = {
                code: '002',
                msg: '更新失败'
            };
            return;
        }
        if (result.affectedRows === 1) {
            ctx.body = {
                code: '001',
                msg: '更新成功'
            }
        }
    },
};