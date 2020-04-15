export class News {
    _id:  string;
    title: string;
    description: string;
    URL: string
    imageURL: string 
    category: string
    publishedAt: string


    constructor(title:string, description:string, 
        URL:string, imageURL:string, 
        category:string, publishedAt: string) {
        this.title = title;
        this.description = description;
        this.URL = URL;
        this.imageURL = imageURL;
        this.category = category;
        this.publishedAt = publishedAt
    }
}
