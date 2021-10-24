const Controls = (props) => {
  const { downloadSnippet, changecolor, colors, options, optionChanged,editrorWidth } = props;
  return (
    <div className="controls-wrapper">
      <div>
        <div className="control__label">Gradient</div>
        <div className="colors__wrapper">
          <input
            title="gradient left color"
            type="color"
            name="color1"
            onChange={changecolor}
            value={colors.color1}
          />
        </div>
        <div className="colors__wrapper">
          <input
            title="gradient right color"
            type="color"
            name="color2"
            onChange={changecolor}
            value={colors.color2}
          />
        </div>
      </div>
      <div>
        <div className="control__label">Theme</div>
        <select
          className="custom-select"
          value={options.theme}
          name="theme"
          onChange={optionChanged}
        >
          <option> 3024-day </option>
          <option> 3024-night </option>
          <option> abcdef </option>
          <option> ambiance-mobile </option>
          <option> ambiance </option>
          <option> base16-dark </option>
          <option value="base16-light"> base16-light </option>
          <option> bespin </option>
          <option> blackboard </option>
          <option> cobalt </option>
          <option> colorforth </option>
          <option> darcula </option>
          <option> dracula </option>
          <option> duotone-dark </option>
          <option> duotone-light </option>
          <option> eclipse </option>
          <option> elegant </option>
          <option> erlang-dark </option>
          <option> gruvbox-dark </option>
          <option> hopscotch </option>
          <option> icecoder </option>
          <option> idea </option>
          <option> isotope </option>
          <option> lesser-dark </option>
          <option> liquibyte </option>
          <option> lucario </option>
          <option> material </option>
          <option> mbo </option>
          <option> mdn-like </option>
          <option> midnight </option>
          <option> monokai </option>
          <option> neat </option>
          <option> neo </option>
          <option> night </option>
          <option> oceanic-next </option>
          <option> panda-syntax </option>
          <option> paraiso-dark </option>
          <option> paraiso-light </option>
          <option> pastel-on-dark </option>
          <option> railscasts </option>
          <option> rubyblue </option>
          <option> seti </option>
          <option> shadowfox </option>
          <option> solarized </option>
          <option> ssms </option>
          <option> the-matrix </option>
          <option> tomorrow-night-bright </option>
          <option> tomorrow-night-eighties </option>
          <option> ttcn </option>
          <option> twilight </option>
          <option> vibrant-ink </option>
          <option> xq-dark </option>
          <option> xq-light </option>
          <option> yeti </option>
          <option> zenburn </option>
        </select>
      </div>
      <div>
        <div className="control__label">Language</div>
        <select
          className="custom-select"
          name="mode"
          value={options.mode}
          onChange={optionChanged}
        >
          <option value="apl">APL</option>
          <option value="asciiarmor">PGP</option>
          <option value="asn.1">ASN.1</option>
          <option value="asterisk">Asterisk</option>
          <option value="brainfuck">Brainfuck</option>
          <option value="clike">C</option>
          <option value="clike">C++</option>
          <option value="cobol">Cobol</option>
          <option value="clike">C#</option>
          <option value="clojure">Clojure</option>
          <option value="clojure">ClojureScript</option>
          <option value="css">Closure Stylesheets (GSS)</option>
          <option value="cmake">CMake</option>
          <option value="coffeescript">CoffeeScript</option>
          <option value="commonlisp">Common Lisp</option>
          <option value="cypher">Cypher</option>
          <option value="python">Cython</option>
          <option value="crystal">Crystal</option>
          <option value="css">CSS</option>
          <option value="sql">CQL</option>
          <option value="d">D</option>
          <option value="dart">Dart</option>
          <option value="diff">diff</option>
          <option value="django">Django</option>
          <option value="dockerfile">Dockerfile</option>
          <option value="dtd">DTD</option>
          <option value="dylan">Dylan</option>
          <option value="ebnf">EBNF</option>
          <option value="ecl">ECL</option>
          <option value="clojure">edn</option>
          <option value="eiffel">Eiffel</option>
          <option value="elm">Elm</option>
          <option value="htmlembedded">Embedded Javascript</option>
          <option value="htmlembedded">Embedded Ruby</option>
          <option value="erlang">Erlang</option>
          <option value="sql">Esper</option>
          <option value="factor">Factor</option>
          <option value="fcl">FCL</option>
          <option value="forth">Forth</option>
          <option value="fortran">Fortran</option>
          <option value="mllike">F#</option>
          <option value="gas">Gas</option>
          <option value="gherkin">Gherkin</option>
          <option value="gfm">GitHub Flavored Markdown</option>
          <option value="go">Go</option>
          <option value="groovy">Groovy</option>
          <option value="haml">HAML</option>
          <option value="haskell">Haskell</option>
          <option value="haskell-literate">Haskell (Literate)</option>
          <option value="haxe">Haxe</option>
          <option value="haxe">HXML</option>
          <option value="htmlembedded">ASP.NET</option>
          <option value="htmlmixed">HTML</option>
          <option value="http">HTTP</option>
          <option value="idl">IDL</option>
          <option value="pug">Pug</option>
          <option value="clike">Java</option>
          <option value="htmlembedded">Java Server Pages</option>
          <option value="javascript">JavaScript</option>
          <option value="javascript">JSON</option>
          <option value="javascript">JSON-LD</option>
          <option value="jsx">JSX</option>
          <option value="jinja2">Jinja2</option>
          <option value="julia">Julia</option>
          <option value="clike">Kotlin</option>
          <option value="css">LESS</option>
          <option value="livescript">LiveScript</option>
          <option value="lua">Lua</option>
          <option value="markdown">Markdown</option>
          <option value="mirc">mIRC</option>
          <option value="sql">MariaDB SQL</option>
          <option value="mathematica">Mathematica</option>
          <option value="modelica">Modelica</option>
          <option value="mumps">MUMPS</option>
          <option value="sql">MS SQL</option>
          <option value="mbox">mbox</option>
          <option value="sql">MySQL</option>
          <option value="nginx">Nginx</option>
          <option value="nsis">NSIS</option>
          <option value="ntriples">NTriples</option>
          <option value="clike">Objective-C</option>
          <option value="mllike">OCaml</option>
          <option value="octave">Octave</option>
          <option value="oz">Oz</option>
          <option value="pascal">Pascal</option>
          <option value="pegjs">PEG.js</option>
          <option value="perl">Perl</option>
          <option value="php">PHP</option>
          <option value="pig">Pig</option>
          <option value="null">Plain Text</option>
          <option value="sql">PLSQL</option>
          <option value="powershell">PowerShell</option>
          <option value="properties">Properties files</option>
          <option value="protobuf">ProtoBuf</option>
          <option value="python">Python</option>
          <option value="puppet">Puppet</option>
          <option value="q">Q</option>
          <option value="r">R</option>
          <option value="rst">reStructuredText</option>
          <option value="rpm">RPM Changes</option>
          <option value="rpm">RPM Spec</option>
          <option value="ruby">Ruby</option>
          <option value="rust">Rust</option>
          <option value="sas">SAS</option>
          <option value="sass">Sass</option>
          <option value="clike">Scala</option>
          <option value="scheme">Scheme</option>
          <option value="css">SCSS</option>
          <option value="shell">Shell</option>
          <option value="sieve">Sieve</option>
          <option value="slim">Slim</option>
          <option value="smalltalk">Smalltalk</option>
          <option value="smarty">Smarty</option>
          <option value="solr">Solr</option>
          <option value="mllike">SML</option>
          <option value="soy">Soy</option>
          <option value="sparql">SPARQL</option>
          <option value="spreadsheet">Spreadsheet</option>
          <option value="sql">SQL</option>
          <option value="sql">SQLite</option>
          <option value="clike">Squirrel</option>
          <option value="stylus">Stylus</option>
          <option value="swift">Swift</option>
          <option value="stex">sTeX</option>
          <option value="stex">LaTeX</option>
          <option value="verilog">SystemVerilog</option>
          <option value="tcl">Tcl</option>
          <option value="textile">Textile</option>
          <option value="tiddlywiki">TiddlyWiki </option>
          <option value="tiki">Tiki wiki</option>
          <option value="toml">TOML</option>
          <option value="tornado">Tornado</option>
          <option value="troff">troff</option>
          <option value="ttcn">TTCN</option>
          <option value="ttcn-cfg">TTCN_CFG</option>
          <option value="turtle">Turtle</option>
          <option value="javascript">TypeScript</option>
          <option value="jsx">TypeScript-JSX</option>
          <option value="twig">Twig</option>
          <option value="webidl">Web IDL</option>
          <option value="vb">VB.NET</option>
          <option value="vbscript">VBScript</option>
          <option value="velocity">Velocity</option>
          <option value="verilog">Verilog</option>
          <option value="vhdl">VHDL</option>
          <option value="vue">Vue.js Component</option>
          <option value="xml">XML</option>
          <option value="xquery">XQuery</option>
          <option value="yacas">Yacas</option>
          <option value="yaml">YAML</option>
          <option value="z80">Z80</option>
          <option value="mscgen">mscgen</option>
          <option value="mscgen">xu</option>
          <option value="mscgen">msgenny</option>
        </select>
      </div>
      <div id="range__wrapper">
        <div className="control__label">Width : {editrorWidth}%
        </div>
        <input type="range" name="editorwidth" min="0" max="100" value={editrorWidth} onChange={optionChanged}/>
      </div>
      <div>
        <div title="click to download" className="download__wrapper" onClick={() => {
            downloadSnippet();
          }}>
          <svg viewBox='0 0 100 100'>
            <g id="download">
              <path d="M 50 2 50 80"></path>
              <path d="M 20 50 50 80 80 50"></path>
              <path d="M 2 70 2 88 Q 2 98 12 98 L 88 98 Q 98 98 98 88 L 98 70"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Controls;
