const navLinks = document.querySelectorAll(".menu__section__list__item a")
const mobileNavLinks = document.querySelectorAll(".mobile__nav__list a")
const burgerBtn = document.querySelectorAll(".menu__section__btn")
const burgerBtn2 = document.querySelector(".mobile__nav__btn2")
const mobileNav = document.querySelector(".mobile__nav")

const handleMenu = () => {
	mobileNav.classList.toggle("show")
}

const closeMenu = () => {
	mobileNav.classList.remove("show")
}

burgerBtn.forEach(button => {
	button.addEventListener("click", handleMenu)
})

if (burgerBtn2) {
	burgerBtn2.addEventListener("click", handleMenu)
}

navLinks.forEach(link => {
	if (link.getAttribute("href").startsWith("#")) {
		link.addEventListener("click", event => {
			event.preventDefault()
			const targetId = link.getAttribute("href")
			const targetSection = document.querySelector(targetId)
			const navHeight = document.querySelector(".mobile__nav").offsetHeight
			const targetOffset =
				targetSection.offsetTop -
				navHeight +
				parseInt(link.dataset.offset || "0") +
				20
			window.scrollTo({
				top: targetOffset,
				behavior: "smooth",
			})
			closeMenu()
		})
	} else {
		link.addEventListener("click", () => {
			closeMenu()
		})
	}
})

mobileNavLinks.forEach(link => {
	if (link.getAttribute("href").startsWith("#")) {
		link.addEventListener("click", event => {
			event.preventDefault()
			const targetId = link.getAttribute("href")
			const targetSection = document.querySelector(targetId)
			const navHeight = document.querySelector(".mobile__nav").offsetHeight
			const targetOffset =
				targetSection.offsetTop -
				navHeight +
				parseInt(link.dataset.offset || "0") +
				200
			window.scrollTo({
				top: targetOffset,
				behavior: "smooth",
			})
			closeMenu()
		})
	} else {
		link.addEventListener("click", () => {
			closeMenu()
		})
	}
})
