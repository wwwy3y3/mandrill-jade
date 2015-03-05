var Mailer= function (params) {
	var self= this;
	return self;
}

Mailer.prototype.config= function(params) {
	var self= this;
	self.templatePath= params.templatePath;
};

Mailer.prototype.send = function(template) {
	//
};

module.exports= Mailer;