function AreaOfTriangle(v0, v1, v2)
{   
    // vec 01
	var xa = v1.x - v0.x,
		ya = v1.y - v0.y,
		za = v1.z - v0.z;

	// vec 12
	var xb = v2.x - v0.x,
		yb = v2.y - v0.y,
		zb = v2.z - v0.z;

	// calc corss product
	var xg = (ya * zb) - (za * yb);
		yg = (za * xb) - (xa * zb),
		zg = (xa * yb) - (ya * xb);

	// calc area
	var tmp = Math.pow(xg, 2) + Math.pow(yg, 2) + Math.pow(zg, 2);
	var S   = Math.sqrt(tmp)/2;
	return S;
}