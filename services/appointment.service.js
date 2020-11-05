const sql = require('../config/mysql');
bookAppointment = async (req, res) => {
    try {
        const appointment = {
            app_date: req.body.app_date,
            app_time: req.body.app_time,
            patient_phone: req.body.patient_phone,
            doc_id: req.body.doc_id,
            app_status: 'OPEN',
            patient_email: req.body.patient_email,
            patient_name: req.body.patient_name,
        }
        var querySql = "insert into appointment (app_date,app_time,doc_id,patient_name,patient_email,patient_phone,app_status)values ('" + appointment.app_date + "','" + appointment.app_time + "'," + appointment.doc_id + ",'" + appointment.patient_name + "','" + appointment.patient_email + "','" + appointment.patient_phone + "','" + appointment.app_status + "')";
        await sql.query(querySql,  (err, result) => {
            if (err) {
                throw err;
            }
        });
        res.status(200).send({appointment});
    } catch (e) {
        res.status(400).send(e);
    }
}

module.exports = bookAppointment;