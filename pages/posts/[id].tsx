import Head from "next/head";
import PostInfo from "../../components/PostInfo"
//необходимо знать сколько рендерить для ssg static site generator
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(({id}) => ({
        params: {id: id.toString()}  //значение id необхомо в строковом формате используем toString()
    }))
    return {
        paths,
        fallback: false
    }
}
//для наполнения контентом
export const getStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    if (!data) {                    //если нет данных то возвращает объект и next.js перекидывает на 404 ошибку
        return {
            notFound: true
        }
    }
    return {
        props: {post: data}
    }
}

const Post = ({post}) => (

    <>
        <Head>
            <title>Contact page</title>
        </Head>
        <PostInfo post={post}/>
    </>
)
export default Post
