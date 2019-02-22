export class Item {
    constructor(id: number, icon: string, name: string, description: string) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.description = description;
    }
    id: number;
    icon: string;
    name: string;
    description: string;
}