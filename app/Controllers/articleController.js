const Article = require('../Models/Article');

class ArticleController {

    async createArticle(article){
        return Article.create(article);
    };

    async allArticles(){
        return Article.find();
    };

    async articleById(id){
        return Article.findById(id);
    };

    async articleByName(name){
        return Article.findOne({name: name});
    };

    async updateArticle(id, article){
        return Article.findByIdAndUpdate(id, article);
    };

    async deleteArticle(id){
        return Article.findByIdAndRemove(id);
    };
};

const articleController = new ArticleController;
module.exports = articleController;