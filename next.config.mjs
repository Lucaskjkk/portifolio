import { withContentlayer } from "next-contentlayer";
import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basepath: '/app',
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);

