import { loremIpsum, LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum();

export let jobs = [{
        id: '1',
        title: " First Job",
        salary: 20000,
        details: lorem.generateParagraphs(3)
    },
    {
        id: '2',
        title: " Second Job",
        salary: 20000,
        details: lorem.generateParagraphs(3)
    },
    {
        id: '3',
        title: " Third Job",
        salary: 20000,
        details: lorem.generateParagraphs(3)
    },

];