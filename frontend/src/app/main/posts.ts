export class Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(userId: number , id: number, title: string, body: string) {
        this.body = body;
        this.id = id;
        this.title = title;
        this.userId = userId;
    }
}
