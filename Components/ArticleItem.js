import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({article}) => {
    // const handleClick = (e) => {
    //     // console.log("you clicked ", article.id, " number article");
    // }
    return (
        <div key={article.id} className={articleStyles.grid}>
            <Link href={`/article/${article.id}`}>
                <a className={articleStyles.card}>
                    <h3>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        </div>
    )
}

export default ArticleItem
