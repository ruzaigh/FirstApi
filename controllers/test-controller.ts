import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';


interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};


const testAdd = (req: Request, res: Response) => {
    let title: string = req.body.title;
    let body: string = req.body.body;

    let response = {
        title: title,
        body: body
    }
    return res.status(200).json({
        message: response
    })
}

export default { testAdd, getPosts };