const {
  selectArticles,
  selectArticleById,
  selectArticleComments,
  checkIfArticleExists,
} = require("../models/models.articles");
exports.getArticles = (req, res, next) => {
  selectArticles()
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};

exports.getArticleById = (req, res, next) => {
  const articleId = req.params.article_id;
  selectArticleById(articleId)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.getArticleComments = (req, res, next) => {
  const articleId = req.params.article_id;

  Promise.all([
    selectArticleComments(articleId),
    checkIfArticleExists(articleId),
  ])
    .then(([comments]) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};