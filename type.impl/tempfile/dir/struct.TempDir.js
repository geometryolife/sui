(function() {
    var type_impls = Object.fromEntries([["mysten_common",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CPath%3E-for-TempDir\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#451\">Source</a><a href=\"#impl-AsRef%3CPath%3E-for-TempDir\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#452\">Source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<Path>","mysten_common::random_util::TempDir"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TempDir\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#457\">Source</a><a href=\"#impl-Debug-for-TempDir\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#458\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mysten_common::random_util::TempDir"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-TempDir\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#465\">Source</a><a href=\"#impl-Drop-for-TempDir\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#466\">Source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","mysten_common::random_util::TempDir"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TempDir\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#200\">Source</a><a href=\"#impl-TempDir\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#235\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to make a temporary directory inside of <code>env::temp_dir()</code>.</p>\n<p>See <a href=\"struct.Builder.html\"><code>Builder</code></a> for more configuration.</p>\n<p>The directory and everything inside it will be automatically deleted\nonce the returned <code>TempDir</code> is destroyed.</p>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<p>If the directory can not be created, <code>Err</code> is returned.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs::File;\n<span class=\"kw\">use </span>std::io::Write;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"comment\">// Create a directory inside of `std::env::temp_dir()`\n</span><span class=\"kw\">let </span>tmp_dir = TempDir::new()<span class=\"question-mark\">?</span>;\n\n<span class=\"kw\">let </span>file_path = tmp_dir.path().join(<span class=\"string\">\"my-temporary-note.txt\"</span>);\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>tmp_file = File::create(file_path)<span class=\"question-mark\">?</span>;\n<span class=\"macro\">writeln!</span>(tmp_file, <span class=\"string\">\"Brian was here. Briefly.\"</span>)<span class=\"question-mark\">?</span>;\n\n<span class=\"comment\">// `tmp_dir` goes out of scope, the directory as well as\n// `tmp_file` will be deleted here.</span></code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_in\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#264\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.new_in\" class=\"fn\">new_in</a>&lt;P&gt;(dir: P) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make a temporary directory inside of <code>dir</code>.\nThe directory and everything inside it will be automatically\ndeleted once the returned <code>TempDir</code> is destroyed.</p>\n<h5 id=\"errors-1\"><a class=\"doc-anchor\" href=\"#errors-1\">§</a>Errors</h5>\n<p>If the directory can not be created, <code>Err</code> is returned.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs::{<span class=\"self\">self</span>, File};\n<span class=\"kw\">use </span>std::io::Write;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"comment\">// Create a directory inside of the current directory\n</span><span class=\"kw\">let </span>tmp_dir = TempDir::new_in(<span class=\"string\">\".\"</span>)<span class=\"question-mark\">?</span>;\n<span class=\"kw\">let </span>file_path = tmp_dir.path().join(<span class=\"string\">\"my-temporary-note.txt\"</span>);\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>tmp_file = File::create(file_path)<span class=\"question-mark\">?</span>;\n<span class=\"macro\">writeln!</span>(tmp_file, <span class=\"string\">\"Brian was here. Briefly.\"</span>)<span class=\"question-mark\">?</span>;</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_prefix\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#292\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.with_prefix\" class=\"fn\">with_prefix</a>&lt;S&gt;(prefix: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make a temporary directory with the specified prefix inside of\n<code>env::temp_dir()</code>. The directory and everything inside it will be automatically\ndeleted once the returned <code>TempDir</code> is destroyed.</p>\n<h5 id=\"errors-2\"><a class=\"doc-anchor\" href=\"#errors-2\">§</a>Errors</h5>\n<p>If the directory can not be created, <code>Err</code> is returned.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs::{<span class=\"self\">self</span>, File};\n<span class=\"kw\">use </span>std::io::Write;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"comment\">// Create a directory inside of the current directory\n</span><span class=\"kw\">let </span>tmp_dir = TempDir::with_prefix(<span class=\"string\">\"foo-\"</span>)<span class=\"question-mark\">?</span>;\n<span class=\"kw\">let </span>tmp_name = tmp_dir.path().file_name().unwrap().to_str().unwrap();\n<span class=\"macro\">assert!</span>(tmp_name.starts_with(<span class=\"string\">\"foo-\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_prefix_in\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#320-323\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.with_prefix_in\" class=\"fn\">with_prefix_in</a>&lt;S, P&gt;(prefix: S, dir: P) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html\" title=\"struct tempfile::dir::TempDir\">TempDir</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt;,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make a temporary directory with the specified prefix inside\nthe specified directory. The directory and everything inside it will be\nautomatically deleted once the returned <code>TempDir</code> is destroyed.</p>\n<h5 id=\"errors-3\"><a class=\"doc-anchor\" href=\"#errors-3\">§</a>Errors</h5>\n<p>If the directory can not be created, <code>Err</code> is returned.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs::{<span class=\"self\">self</span>, File};\n<span class=\"kw\">use </span>std::io::Write;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"comment\">// Create a directory inside of the current directory\n</span><span class=\"kw\">let </span>tmp_dir = TempDir::with_prefix_in(<span class=\"string\">\"foo-\"</span>, <span class=\"string\">\".\"</span>)<span class=\"question-mark\">?</span>;\n<span class=\"kw\">let </span>tmp_name = tmp_dir.path().file_name().unwrap().to_str().unwrap();\n<span class=\"macro\">assert!</span>(tmp_name.starts_with(<span class=\"string\">\"foo-\"</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.path\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#356\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.path\" class=\"fn\">path</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a></h4></section></summary><div class=\"docblock\"><p>Accesses the <a href=\"http://doc.rust-lang.org/std/path/struct.Path.html\"><code>Path</code></a> to the temporary directory.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"kw\">let </span>tmp_path;\n\n{\n   <span class=\"kw\">let </span>tmp_dir = TempDir::new()<span class=\"question-mark\">?</span>;\n   tmp_path = tmp_dir.path().to_owned();\n\n   <span class=\"comment\">// Check that the temp directory actually exists.\n   </span><span class=\"macro\">assert!</span>(tmp_path.exists());\n\n   <span class=\"comment\">// End of `tmp_dir` scope, directory will be deleted\n</span>}\n\n<span class=\"comment\">// Temp directory should be deleted by now\n</span><span class=\"macro\">assert_eq!</span>(tmp_path.exists(), <span class=\"bool-val\">false</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_path\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#388\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.into_path\" class=\"fn\">into_path</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a></h4></section></summary><div class=\"docblock\"><p>Persist the temporary directory to disk, returning the <a href=\"http://doc.rust-lang.org/std/path/struct.PathBuf.html\"><code>PathBuf</code></a> where it is located.</p>\n<p>This consumes the <a href=\"struct.TempDir.html\"><code>TempDir</code></a> without deleting directory on the filesystem, meaning that\nthe directory will no longer be automatically deleted.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"kw\">let </span>tmp_dir = TempDir::new()<span class=\"question-mark\">?</span>;\n\n<span class=\"comment\">// Persist the temporary directory to disk,\n// getting the path where it is.\n</span><span class=\"kw\">let </span>tmp_path = tmp_dir.into_path();\n\n<span class=\"comment\">// Delete the temporary directory ourselves.\n</span>fs::remove_dir_all(tmp_path)<span class=\"question-mark\">?</span>;</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/tempfile/3.1.0/src/tempfile/dir.rs.html#437\">Source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/tempfile/3.1.0/tempfile/dir/struct.TempDir.html#tymethod.close\" class=\"fn\">close</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Closes and removes the temporary directory, returning a <code>Result</code>.</p>\n<p>Although <code>TempDir</code> removes the directory on drop, in the destructor\nany errors are ignored. To detect errors cleaning up the temporary\ndirectory, call <code>close</code> instead.</p>\n<h5 id=\"errors-4\"><a class=\"doc-anchor\" href=\"#errors-4\">§</a>Errors</h5>\n<p>This function may return a variety of <a href=\"http://doc.rust-lang.org/std/io/struct.Error.html\"><code>std::io::Error</code></a>s that result from deleting\nthe files and directories contained with the temporary directory,\nas well as from deleting the temporary directory itself. These errors\nmay be platform specific.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::fs::File;\n<span class=\"kw\">use </span>std::io::Write;\n<span class=\"kw\">use </span>tempfile::TempDir;\n\n<span class=\"comment\">// Create a directory inside of `std::env::temp_dir()`.\n</span><span class=\"kw\">let </span>tmp_dir = TempDir::new()<span class=\"question-mark\">?</span>;\n<span class=\"kw\">let </span>file_path = tmp_dir.path().join(<span class=\"string\">\"my-temporary-note.txt\"</span>);\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>tmp_file = File::create(file_path)<span class=\"question-mark\">?</span>;\n<span class=\"macro\">writeln!</span>(tmp_file, <span class=\"string\">\"Brian was here. Briefly.\"</span>)<span class=\"question-mark\">?</span>;\n\n<span class=\"comment\">// By closing the `TempDir` explicitly we can check that it has\n// been deleted successfully. If we don't close it explicitly,\n// the directory will still be deleted when `tmp_dir` goes out\n// of scope, but we won't know whether deleting the directory\n// succeeded.\n</span>drop(tmp_file);\ntmp_dir.close()<span class=\"question-mark\">?</span>;</code></pre></div>\n</div></details></div></details>",0,"mysten_common::random_util::TempDir"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[21379]}