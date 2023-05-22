function getPow(num, degree) {

	if (num === 0 || degree === 0) {
        return 1;
	} else {
        return num * getPow(num, degree - 1);
	}
}

console.log(getPow(2, 1));
