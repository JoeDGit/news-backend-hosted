const {
  getArticles,
  getArticleById,
  getArticleComments,
  postArticle,
  postArticleComment,
  patchArticleVotes,
} = require('../controllers/controllers.articles');

const articlesRouter = require('express').Router();

articlesRouter.route('/').get(getArticles).post(postArticle);

articlesRouter
  .route('/:article_id')
  .get(getArticleById)
  .patch(patchArticleVotes);

articlesRouter
  .route('/:article_id/comments')
  .get(getArticleComments)
  .post(postArticleComment);

module.exports = articlesRouter;
