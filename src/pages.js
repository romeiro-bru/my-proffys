const Database = require('./database/db')

// FUNCIONALIDADES
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy (req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    // converter horas em minutos
    const timeToMinutes = convertHoursToMinutes(filters.time)


    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}    
        )
        AND classes.subject = '${filters.subject}'
    `
    // em caso de erro na colsuta da DB
    try {
        const db = await Database
        const proffys = await db.all(query)

        return res.render('study.html', { proffys, subjects, filters, weekdays })
        
    } catch (error) {
        console.log(error)
    }

}

function pageTeach (req, res) {
    const data = req.query
    // add data into proffys object
    // if we have data, add the data
    if (Object.keys(data).length > 0) {
        data.subject = getSubject(data.subject)
        // console.log(data)
        proffys.push(data)
        return res.redirect("/study")
    }
    // if doesn't then do not add and show teach page again
    return res.render("teach.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageTeach
}
