const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
// inserir dados
    proffyValue = {
        name: 'Bruna Romeiro',
        avatar: 'https://avatars0.githubusercontent.com/u/56081906?s=460&u=3ec07f792b3fa690983bec21ef934a81edc67ecb&v=4',
        whatsapp: '21994766448',
        bio: 'Professora de biologia.'
    }

    classValue = {
        subject: 3,
        cost: '45'
        // proffy id vem do banco de dados
    }

    // class_id vem do banco de dados após cadastro
    classScheduleValues = [
        {
            weekday: 2,
            time_from: 506,
            time_to: 1223
        },
        {
            weekday: 1,
            time_from: 536,
            time_to: 1223
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

// consultar dados inseridos

// todos os proffys
    const selectedProffys =  await db.all("SELECT * FROM proffys")

// consultar as classses de um determinado proffy
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // ex: horário da aula, from 8h to 18h. 
    // time_from precisa ser menor ou igual horário solicitado
    // time_to precisa ser maior
    const selectClassesSchedule = await db.all (`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "506"
        AND class_schedule.time_to > "1200"
    `)
    console.log(selectClassesSchedule)

})