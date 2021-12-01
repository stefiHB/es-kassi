
interface BlogProps {
    title: string,
    details: string,
    image?: any,
    dateCreated?: Date
}

const BlogItem = ({title, dateCreated, image, details}: BlogProps) => {
    return <div>I am a blog</div>
}

export default BlogItem;
