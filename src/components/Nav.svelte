<script>
	export let segment;
</script>

<style>
	nav {
		background: #fff3ef;
	}
nav div{
	max-width: 1680px;
	padding: 0 10px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
}
	ul {
		margin: 0;
		padding: 0;
		text-align: right;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		text-transform: capitalize;
	}
	img{
		width: 50px;
	}
</style>

<nav>
	<div>
		<a href=".">
<img src="logo/logo-192.png" alt=""></a>
	<ul>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'jobs' ? 'page' : undefined}" href="jobs">Jobs</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
	</ul>
</div>
</nav>
