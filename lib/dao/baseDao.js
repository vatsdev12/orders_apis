class BaseDao {
	constructor(dbModel){
		//Get Model
		this.Model = dbModel;
	}

	save(object){
		return this.Model.create(object);
	}

	findOne(query, projection){
		return this.Model.findOne(query, projection).lean().exec();
	}

	find(query, projection){
		return this.Model.find(query, projection).lean().exec();
	}

	findOneAndUpdate(query, update, options){
		return this.Model.findOneAndUpdate(query, update, options).exec();
	}

	findAndModify(query, update, options){
		return this.Model.findAndModify(query, update, options).exec();
	}

	findByIdAndUpdate(query, update, options){
		return this.Model.findByIdAndUpdate(query, update, options).exec();
	}

	/**
	 * Update Given Model
	 * @param query
	 * @param toUpdate
	 * @return Promise Object
	 * @private
	 */
	update(query, update, options){
		if(!options){
			options = {};
		}
		return this.Model.update(query, update, options).exec();
	}

	remove(query, options){
		return this.Model.remove(query, options).exec();
	}

	deleteMany(query, options){
		return this.Model.deleteMany(query, options).exec();
	}

	findByIdAndRemove(query, options){
		return this.Model.findByIdAndRemove(query, options).exec();
	}

	aggregate(aggPipe, options){
		if(!options){
			options = {};
		}
		return this.Model.aggregate(aggPipe).collation(options).exec();
	}
}

// ========================== Export Module Start ==========================
module.exports = BaseDao;
// ========================== Export Module End ============================