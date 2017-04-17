
Vec3 = function(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vec3.prototype.add = function(v)
{
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}

Vec3.prototype.sum = function()
{
	return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
	return Math.min(Math.min(this.x, this.y), this.z);
}

Vec3.prototype.max = function()
{
	return Math.max(Math.max(this.x, this.y), this.z);
}

Vec3.prototype.mid = function()
{
	var max1 = Math.max(this.x, this.y);
	var max2 = Math.max(this.y, this.z);
	if(max1 != max2){
		return Math.min(max1, max2);
	}else{ 
		if(this.y == max1){
			return Math.max(this.x, this.z);
		}else{
			return this.x;
		}
	}

}
