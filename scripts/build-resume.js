import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const resumeTex = join(root, 'resume.tex');
const outputPath = join(root, 'src', 'data', 'resume-output.html');

const placeholder = `<p>Place your <code>resume.tex</code> in the project root and run <code>npm run build</code> to generate your resume here.</p>`;

try {
	if (!existsSync(resumeTex)) {
		console.warn('resume.tex not found. Using placeholder.');
		mkdirSync(dirname(outputPath), { recursive: true });
		writeFileSync(outputPath, placeholder);
	} else {

		execSync(`pandoc "${resumeTex}" -o "${outputPath}"`, {
			stdio: 'inherit',
		});
		console.log('Resume built successfully.');
	}
} catch (err) {
	console.warn('Pandoc failed or not installed. Using placeholder. Install pandoc: https://pandoc.org/installing.html');
	mkdirSync(dirname(outputPath), { recursive: true });
	writeFileSync(outputPath, placeholder);
}
