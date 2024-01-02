export class Blog {

    id: Number;
    title: String;
    author: String;
    content: String;

    constructor(id: number, title: String, author: String, content: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
    }

}