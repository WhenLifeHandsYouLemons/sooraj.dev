# Add this to "run custom script" in Bootstrap Studio: C:\Users\User\Documents\GitHub\sooraj.dev\add_google_analytics.exe
import os
import sys

def add_content_to_html_files(folder_path, html_content):
    # Get list of files in the specified folder
    files = os.listdir(folder_path)

    # Iterate through each file in the folder
    for file_name in files:
        # Check if the file is an HTML file
        if file_name.endswith('.html'):
            file_path = os.path.join(folder_path, file_name)

            # Read the contents of the HTML file
            with open(file_path, 'r') as file:
                html_data = file.readlines()

            # Find the index of the </head> tag
            head_index = None
            for i, line in enumerate(html_data):
                if '</head>' in line:
                    head_index = i
                    break

            # If </head> tag is found, insert the HTML content after it
            if head_index is not None:
                html_data.insert(head_index + 1, html_content + '\n')

                # Write the modified content back to the file
                with open(file_path, 'w') as file:
                    file.writelines(html_data)
                print(f"Added content to {file_name}")
            else:
                print(f"Could not find </head> tag in {file_name}, content not added.")

if __name__ == "__main__":
    # Check if folder path is provided as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python script.py folder_path")
        sys.exit(1)

    folder_path = sys.argv[1]
    html_content = """
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K6TVV7PE2C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K6TVV7PE2C');
</script>"""

    # Call the function to add content to HTML files
    add_content_to_html_files(folder_path, html_content)
