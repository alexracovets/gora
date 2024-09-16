const handleScroll = (setIsScrolled) => {
    if (window.scrollY > 90) {
        if (window.scrollY > (window.lastScrollY || 0)) {
            console.log(window.scrollY)
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        window.lastScrollY = window.scrollY;
    }
};

export default handleScroll;