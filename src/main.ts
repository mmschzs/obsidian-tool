import {App, FileSystemAdapter, MarkdownView, Plugin} from 'obsidian';

export default class ObsidianToolPlugin extends Plugin {
	async onload() {
		// This adds a command to jump to VS Code at the current cursor position
		this.addCommand({
			id: 'jump-to-vscode',
			name: 'Jump to VS Code',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view || !view.file) {
					return;
				}
				
				// Get the file path relative to the vault
				const filePath = view.file.path;
				
				// Get the absolute path of the vault
				const vaultBasePath = (this.app.vault.adapter as FileSystemAdapter).getBasePath();
				
				// Construct the full absolute path
				const absolutePath = `${vaultBasePath}/${filePath}`.replace(/\\/g, '/');
				
				// Get the cursor position (0-based in Obsidian)
				const cursor = view.editor.getCursor();
				
				// Construct the URI with 1-based line/column for VS Code
				const uri = `vscode://file/${absolutePath}:${cursor.line + 1}:${cursor.ch + 1}`;
				
				// Open the URI in VS Code
				window.open(uri);
			}
		});
	}

	onunload() {
	}
}
