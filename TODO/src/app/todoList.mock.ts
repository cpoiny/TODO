import { ICategory, ITodo } from "./todo";

export const TODOLIST : ITodo [] = [
{
    id:1,
    content: "Faire la vaisselle",
    category: "cleaning",
    picture: "cleaning-icon.png",
    isUrgent: false,
    doneDate: null
},
{
    id:2,
    content: "Acheter maillot de bain",
    category: "shopping",
    picture: "shopping-icon.png",
    isUrgent: false,
    doneDate: null
},
{
    id:3,
    content: "Faire tour des heroes",
    category: "work",
    picture: "work-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:4,
    content: "Payer facture internet",
    category: "bills",
    picture: "bill-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:5,
    content: "Faire du sport",
    category: "health",
    picture: "health-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:6,
    content: "Aller voir Paul",
    category: "other",
    picture: "other-icon.png",
    isUrgent: false,
    doneDate: null
}
]

export const CATEGORYLIST : ICategory[] = [
    {
        id: 1,
        content: "cleaning-icon.png",
        category : "cleaning"
    },
    {
        id: 2,
        content: "shopping-icon.png",
        category : "shopping"
    },
    {
        id: 3,
        content: "work-icon.png",
        category : "work"
    },
    {
        id: 4,
        content: "bill-icon.png",
        category : "bills"
    },
    {
        id: 5,
        content: "health-icon.png",
        category : "health"
    },
    {
        id: 6,
        content: "other-icon.png",
        category : "other"
    },
]