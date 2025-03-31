(function() {
    var type_impls = Object.fromEntries([["sui_aws_orchestrator",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NarwhalProtocol\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#213-222\">Source</a><a href=\"#impl-NarwhalProtocol\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalProtocol.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalProtocol\">NarwhalProtocol</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#215-221\">Source</a><h4 class=\"code-header\">pub fn <a href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalProtocol.html#tymethod.new\" class=\"fn\">new</a>(settings: &amp;<a class=\"struct\" href=\"sui_aws_orchestrator/settings/struct.Settings.html\" title=\"struct sui_aws_orchestrator::settings::Settings\">Settings</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Make a new instance of the Narwhal protocol commands generator.</p>\n</div></details></div></details>",0,"sui_aws_orchestrator::Protocol"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProtocolCommands%3CNarwhalBenchmarkType%3E-for-NarwhalProtocol\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#60-211\">Source</a><a href=\"#impl-ProtocolCommands%3CNarwhalBenchmarkType%3E-for-NarwhalProtocol\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html\" title=\"trait sui_aws_orchestrator::protocol::ProtocolCommands\">ProtocolCommands</a>&lt;<a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalBenchmarkType.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalBenchmarkType\">NarwhalBenchmarkType</a>&gt; for <a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalProtocol.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalProtocol\">NarwhalProtocol</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.protocol_dependencies\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#61-67\">Source</a><a href=\"#method.protocol_dependencies\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.protocol_dependencies\" class=\"fn\">protocol_dependencies</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>The list of dependencies to install (e.g., through apt-get).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.db_directories\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#69-76\">Source</a><a href=\"#method.db_directories\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.db_directories\" class=\"fn\">db_directories</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;</h4></section></summary><div class='docblock'>The directories of all databases (that should be erased before each run).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.genesis_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#78-102\">Source</a><a href=\"#method.genesis_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.genesis_command\" class=\"fn\">genesis_command</a>&lt;'a, I&gt;(&amp;self, instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a><div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The command to generate the genesis and all configuration files. This command\nis run on each remote machine.</div></details><section id=\"method.monitor_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#104-109\">Source</a><a href=\"#method.monitor_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.monitor_command\" class=\"fn\">monitor_command</a>&lt;I&gt;(&amp;self, _instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.node_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#111-197\">Source</a><a href=\"#method.node_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.node_command\" class=\"fn\">node_command</a>&lt;I&gt;(\n    &amp;self,\n    instances: I,\n    parameters: &amp;<a class=\"struct\" href=\"sui_aws_orchestrator/benchmark/struct.BenchmarkParameters.html\" title=\"struct sui_aws_orchestrator::benchmark::BenchmarkParameters\">BenchmarkParameters</a>&lt;<a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalBenchmarkType.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalBenchmarkType\">NarwhalBenchmarkType</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The command to run a node. The function returns a vector of commands along with the\nassociated instance on which to run the command.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.client_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#199-210\">Source</a><a href=\"#method.client_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolCommands.html#tymethod.client_command\" class=\"fn\">client_command</a>&lt;I&gt;(\n    &amp;self,\n    _instances: I,\n    _parameters: &amp;<a class=\"struct\" href=\"sui_aws_orchestrator/benchmark/struct.BenchmarkParameters.html\" title=\"struct sui_aws_orchestrator::benchmark::BenchmarkParameters\">BenchmarkParameters</a>&lt;<a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalBenchmarkType.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalBenchmarkType\">NarwhalBenchmarkType</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The command to run a client. The function returns a vector of commands along with the\nassociated instance on which to run the command.</div></details></div></details>","ProtocolCommands<NarwhalBenchmarkType>","sui_aws_orchestrator::Protocol"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProtocolMetrics-for-NarwhalProtocol\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#224-262\">Source</a><a href=\"#impl-ProtocolMetrics-for-NarwhalProtocol\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html\" title=\"trait sui_aws_orchestrator::protocol::ProtocolMetrics\">ProtocolMetrics</a> for <a class=\"struct\" href=\"sui_aws_orchestrator/protocol/narwhal/struct.NarwhalProtocol.html\" title=\"struct sui_aws_orchestrator::protocol::narwhal::NarwhalProtocol\">NarwhalProtocol</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.BENCHMARK_DURATION\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#225\">Source</a><a href=\"#associatedconstant.BENCHMARK_DURATION\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#associatedconstant.BENCHMARK_DURATION\" class=\"constant\">BENCHMARK_DURATION</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a> = &quot;narwhal_benchmark_duration&quot;</h4></section></summary><div class='docblock'>The name of the metric reporting the total duration of the benchmark (in seconds).</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.TOTAL_TRANSACTIONS\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#229\">Source</a><a href=\"#associatedconstant.TOTAL_TRANSACTIONS\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#associatedconstant.TOTAL_TRANSACTIONS\" class=\"constant\">TOTAL_TRANSACTIONS</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a> = &quot;worker_req_latency_by_route_count&quot;</h4></section></summary><div class='docblock'>The name of the metric reporting the total number of finalized transactions</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.LATENCY_BUCKETS\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#232\">Source</a><a href=\"#associatedconstant.LATENCY_BUCKETS\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#associatedconstant.LATENCY_BUCKETS\" class=\"constant\">LATENCY_BUCKETS</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a> = &quot;batch_execution_latency&quot;</h4></section></summary><div class='docblock'>The name of the metric reporting the latency buckets.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.LATENCY_SUM\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#233\">Source</a><a href=\"#associatedconstant.LATENCY_SUM\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#associatedconstant.LATENCY_SUM\" class=\"constant\">LATENCY_SUM</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a> = &quot;batch_execution_latency_sum&quot;</h4></section></summary><div class='docblock'>The name of the metric reporting the sum of the end-to-end latency of all finalized\ntransactions.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.LATENCY_SQUARED_SUM\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#236\">Source</a><a href=\"#associatedconstant.LATENCY_SQUARED_SUM\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#associatedconstant.LATENCY_SQUARED_SUM\" class=\"constant\">LATENCY_SQUARED_SUM</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.str.html\">str</a> = &quot;narwhal_client_latency_squared_s&quot;</h4></section></summary><div class='docblock'>The name of the metric reporting the square of the sum of the end-to-end latency of all\nfinalized transactions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nodes_metrics_path\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#238-254\">Source</a><a href=\"#method.nodes_metrics_path\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#tymethod.nodes_metrics_path\" class=\"fn\">nodes_metrics_path</a>&lt;I&gt;(&amp;self, instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The network path where the nodes expose prometheus metrics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clients_metrics_path\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/narwhal.rs.html#256-261\">Source</a><a href=\"#method.clients_metrics_path\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#tymethod.clients_metrics_path\" class=\"fn\">clients_metrics_path</a>&lt;I&gt;(&amp;self, _instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The network path where the clients expose prometheus metrics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nodes_metrics_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/mod.rs.html#75-83\">Source</a><a href=\"#method.nodes_metrics_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#method.nodes_metrics_command\" class=\"fn\">nodes_metrics_command</a>&lt;I&gt;(&amp;self, instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The command to retrieve the metrics from the nodes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clients_metrics_command\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_aws_orchestrator/protocol/mod.rs.html#90-98\">Source</a><a href=\"#method.clients_metrics_command\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_aws_orchestrator/protocol/trait.ProtocolMetrics.html#method.clients_metrics_command\" class=\"fn\">clients_metrics_command</a>&lt;I&gt;(&amp;self, instances: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"sui_aws_orchestrator/client/struct.Instance.html\" title=\"struct sui_aws_orchestrator::client::Instance\">Instance</a>&gt;,</div></h4></section></summary><div class='docblock'>The command to retrieve the metrics from the clients.</div></details></div></details>","ProtocolMetrics","sui_aws_orchestrator::Protocol"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[20864]}