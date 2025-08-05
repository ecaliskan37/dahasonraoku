import favoritedArticles from '../data/favoritedArticles'

export default function Article(props) {
  const extraFavClass = favoritedArticles.find(
    (article) => article.id === props.articleData.id
  )
    ? 'favorited'
    : undefined

  const handleClick = (buttonid, id) => {
    let func = eval(props.fm.find((item) => item.name == buttonid)(id))
  }

  return (
    <div key={props.articleData.id} className="article-container">
      <h3>{props.articleData.title}</h3>

      <img src={props.articleData.image} />

      <div
        className={`article-text-container ${
          props.articleData.expanded ? 'expanded' : 'minimized'
        }`}
      >
        <p>{props.articleData.text}</p>
      </div>

      <button
        className="read-more-button"
        data-button-type="toggleExpand"
        data-article-id={props.articleData.id}
        onClick={() => handleClick('toggleExpand', props.articleData.id)}
      >
        {props.articleData.expanded ? 'Küçült' : 'Daha fazla...'}
      </button>

      <div className="article-buttons-container">
        <button
          className={`add-to-favorites-button ${extraFavClass}`}
          data-button-type="favorite"
          data-article-id={props.articleData.id}
          onClick={() => handleClick('favorite', props.articleData.id)}
        ></button>

        <button
          className="add-to-archive-button"
          data-button-type="archive"
          data-article-id={props.articleData.id}
          onClick={() => handleClick('archive', props.articleData.id)}
        ></button>

        <button
          className="add-to-trash-button"
          data-button-type="trash"
          data-article-id={props.articleData.id}
          onClick={() => handleClick('trash', props.articleData.id)}
        ></button>
      </div>
    </div>
  )
}
