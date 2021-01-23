var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'ExcelsiorGUIwallet';
config.appDescription = 'Excelsior GUI wallet';
config.appSlogan = 'excelsior!';
config.appId = 'com.locostron.ExcelsiorGUIwallet';
config.appGitRepo = 'https://github.com/locostron/EXCELSIORGUIWALLET';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 19801;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'XSL';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'xls-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.1.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://excelsior.ms-pool.net.ua/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '185.203.240.135:19801';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
config.remoteNodeListUpdateUrl = null;

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
	'185.203.240.135:19801',
    '104.238.222.130:19801',
    '185.103.97.205:19801', 
    '97.64.253.98:19801',
];

// your currency name
config.assetName = 'excelsior';
// your currency ticker
config.assetTicker = 'XLS';
// your currency address prefix, for address validation
config.addressPrefix = 'XL';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.01;
// minimum amount for sending transaction
config.mininumSend = 0.01;
// default mixin/anonimity for transaction
config.defaultMixin = 0;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'EXCELSIOR',
    address: 'XL4uTXmV8QLQoknZMLeWwhKmMMuoozBdjSVrRswhjNvcfF1n21KTQi7eqnd3BM4YmiLAzZWC3iTgoLGv2zLxUuwm2zkoUnqAt',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
