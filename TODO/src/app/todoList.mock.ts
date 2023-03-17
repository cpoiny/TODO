import { ITodo } from "./todo";

export const TODOLIST : ITodo [] = [
{
    id:1,
    content: "Faire la vaisselle",
    category: "cleaning",
    picture: "assets/icons/cleaning-icon.png",
    isUrgent: false,
    doneDate: null
},
{
    id:2,
    content: "Acheter maillot de bain",
    category: "shopping",
    picture: "assets/icons/shopping-icon.png",
    isUrgent: false,
    doneDate: null
},
{
    id:3,
    content: "Faire tour des heroes",
    category: "work",
    picture: "assets/icons/work-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:4,
    content: "Payer facture internet",
    category: "bills",
    picture: "assets/icons/bill-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:5,
    content: "Faire du sport",
    category: "health",
    picture: "assets/icons/health-icon.png",
    isUrgent: true,
    doneDate: null
},
{
    id:6,
    content: "Aller voir Paul",
    category: "other",
    picture: "assets/icons/other-icon.png",
    isUrgent: false,
    doneDate: null
}
]