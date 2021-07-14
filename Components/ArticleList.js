import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const Article = ({ articles }) => {

    return (
        <div >
            {
                articles.map(article =>
                    <ArticleItem article={article}/>
                )
            }
        </div>
    )
}

export default Article
