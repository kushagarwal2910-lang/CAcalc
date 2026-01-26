import os
import re

directory = r'c:\Users\agarw\OneDrive\Desktop\CAcalc'

# Pattern: <a href="terms.html" ...>Terms of Use</a>
# We'll permit whitespace variations.
terms_pattern = re.compile(r'(<a\s+href="terms\.html"[^>]*>\s*Terms of Use\s*</a>)', re.IGNORECASE)
disclaimer_link = '<a href="disclaimer.html" class="hover:text-white transition">Disclaimer</a>'

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if 'href="disclaimer.html"' in content:
                print(f"Skipped {filename} (Already has disclaimer)")
                continue
            
            if terms_pattern.search(content):
                # Insert before Terms link
                # We use \1 to refer to the captured terms link
                # We add a newline and spaces for some basic formatting, though HTML doesn't care much.
                # Note: The replacement string in sub processes backslashes, so to get \1 we need output that represents group 1.
                # In Python re.sub, \g<1> is safer or just \1. 
                new_content = terms_pattern.sub(f'{disclaimer_link}\n                \\1', content)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated {filename}")
            else:
                print(f"Skipped {filename} (Terms link not found)")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print(f"Total files updated in V2: {count}")
